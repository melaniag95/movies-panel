export interface IMovie {
    
    imdbID:string;
    Title:string;
    Year:number;
    Type:string;
    Poster:string;
    Genre:string;
    [propName:string]:any;
}
