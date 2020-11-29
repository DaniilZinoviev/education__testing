import { test, expect } from "@jest/globals";

test("setTimeout with callback", (done) => {
  const timeout = 300;
  const start = new Date().getTime();
  setTimeout(() => {
    try {
      const end = new Date().getTime();
      expect(end - start).toBeGreaterThanOrEqual(timeout);
      done();
    } catch (e) {
      done(e);
    }
  }, timeout);
});

test("setTimeout with Promise", () => {
  const timeout = 300;
  const start = new Date().getTime();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const end = new Date().getTime();
        expect(end - start).toBeGreaterThanOrEqual(timeout);
        resolve();
      } catch (e) {
        reject(e);
      }
    }, timeout);
  });
});

test("setTimeout with resolves / rejects", () => {
  const timeout = 300;
  const start = new Date().getTime();
  return expect(
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const end = new Date().getTime();
        resolve(end - start);
      }, timeout);
    })
  ).resolves.toBeGreaterThanOrEqual(timeout);
});

test("setTimeout with async function", async () => {
  const timeout = 300;
  const start = new Date().getTime();
  await new Promise((resolve) => setTimeout(resolve, timeout));
  const end = new Date().getTime();
  expect(end - start).toBeGreaterThanOrEqual(timeout);
});
