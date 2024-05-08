import { expect, test } from "bun:test";
import { getMem, getCPU } from "./info.js";

test("checkCPU", async () => {
  const data = await getCPU();
  expect(data.cores).toBeGreaterThan(0);
}, 50);

test("checkMem", async () => {
  const data = await getMem();
  expect(data.total).toBeGreaterThan(0);
}, 50);

test("checkFreeMem", async () => {
  const data = await getMem();
  //replace this with 
  //for the test to succeed
  //expect(data.total).toEqual(data.free);
  expect(data.total).toBeGreaterThan(data.free);
}, 50);
