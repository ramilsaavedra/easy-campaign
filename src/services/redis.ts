import mongoose from 'mongoose';
import redis from 'redis';

const client = redis.createClient({
  url: process.env.REDIS_URL,
});

console.log(client, 'CLIENT');

const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.cache = function (options) {
  this.useCache = true;
  this.hashKey = JSON.stringify(options.key || '');
  return this;
};

mongoose.Query.prototype.exec = async function () {
  if (!this.useCache) {
    return exec.apply(this);
  }

  const key = JSON.stringify(
    Object.assign({}, this.getQuery(), {
      collection: this.mongooseCollection.name,
    })
  );

  const cacheValue = await client.hGet(this.hashKey, key);

  if (cacheValue) {
    mongoose.Query.prototype.exec = async function () {
      const result = await exec.apply(this);

      client.hSet(this.hashKey, key, JSON.stringify(result));

      return result;
    };
  }
};

module.exports = {
  clearHash(hashKey: {} | string) {
    client.del(JSON.stringify(hashKey));
  },
};
