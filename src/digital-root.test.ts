import digitalRoot from "./digital-root";

test('Single digit input returns itself', () => {
    expect(digitalRoot(7)).toBe(7);
});