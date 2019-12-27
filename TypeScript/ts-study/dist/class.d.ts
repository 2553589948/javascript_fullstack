declare class Cat {
    run(): void;
    private(): void;
    protected sleep(): void;
}
declare const cat: Cat;
declare class GTR extends Cat {
    init(): void;
}
declare const gtr: GTR;
