import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HomeView from "../HomeView.vue";

describe("Home View", () => {
  it("exists", () => {
    const wrapper = mount(HomeView);
    expect(wrapper.exists()).toBe(true);
  });
});
