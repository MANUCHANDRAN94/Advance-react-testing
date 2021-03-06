import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";
import Root from "Root";
let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});
afterEach(() => {
  wrapped.unmount();
});

it("has a textarea and 2 buttons ", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(2);
});

describe("text area", () => {
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: { value: "New Comment" },
    });
    wrapped.update();
  });

  it("HAS A TEXTAREA TO type in", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("New Comment");
  });

  it("submits textarea and textarea itself clears", () => {
    wrapped.find("form").simulate("submit");
    wrapped.update();
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
