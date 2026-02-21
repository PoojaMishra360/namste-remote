import { sum } from "../sum";

test("should add two numbers correctly", () => { 
    const result = sum(3,4);
    
    expect(result).toBe(7);

  });