export namespace darkIntend {

    export interface UserData {
        username: string;
        email: string;
        userID: string;
        password: string;
    }

    export interface RecipeData {
        cuisine: string;
        likes: number;
        date: number;
        title: string;
    }

    export let loggedin: boolean = false;
    export function checkLogIn(): void {
        let divnavbar: HTMLDivElement = <HTMLDivElement> document.querySelector("navbar");
        let link: HTMLAnchorElement = <HTMLAnchorElement> divnavbar.lastElementChild;
        if(loggedin) {
            link.href = "./profile.html";
        }
        else {
            link.href = "./login.html";
        }
    }
}