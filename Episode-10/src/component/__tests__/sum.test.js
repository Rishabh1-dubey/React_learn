
import { sum } from "../Sum";
test("Sum fuction should calsculste the sum of two numbers",()=>{
    const result = sum(3,4);

    //Asseration
    expect(result).toBe(7);
});