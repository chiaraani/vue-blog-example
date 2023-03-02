import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";

import ArticlesIndex from "@/components/Articles/Index.vue";
import { articles } from "@/tests/fixtures/articles";
vi.mock("@/data", async () => ({
  findAll: vi.fn(async (resource) => resource == "articles" && articles),
}));
import { spyComponent } from "@/tests/test-support/expectComponentToHaveBeenMounted";
import ArticlesCollection from "@/components/Articles/Collection.vue";
import createTestRouter from '@/tests/test-support/createTestRouter'

describe("ArticlesIndex", async () => {
  spyComponent(ArticlesCollection);
  const router = await createTestRouter()
  mount(ArticlesIndex, { global: { plugins: [router] } });

  it("finds all articles and mounts collection of them", () =>
    expect(ArticlesCollection).toHaveBeenMountedWith({ articles }));
});
