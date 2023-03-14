import { vi } from "vitest";
import { host } from '@/data'

global.fetch = vi.fn();

export default function mockFetchResponse(expectedPath, data) {
  fetch.mockImplementation(async (actualPath) => {
    if (actualPath == host + expectedPath) return { json: () => ([ ...data ]) };
  });
};