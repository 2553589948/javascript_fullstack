declare const add: (a: number, ...rest: number[]) => number;
interface Direction3 {
    top: number;
    right: number;
    bottom: number;
    left: number;
}
declare function assigned(all: number): Direction3;
declare function assigned(topAndbottom: number, leftandright: number): Direction3;
declare function assigned(top: number, right: number, bottom: number, left: number): Direction3;
