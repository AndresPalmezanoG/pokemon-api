import React from "react";

const Navbar = () => {
    let imgUrl = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e27840a8-6932-4b04-a9dc-bb36fd08d0d6/d7waee8-01a3ad45-0e35-484b-b94f-64225aabbee3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2UyNzg0MGE4LTY5MzItNGIwNC1hOWRjLWJiMzZmZDA4ZDBkNlwvZDd3YWVlOC0wMWEzYWQ0NS0wZTM1LTQ4NGItYjk0Zi02NDIyNWFhYmJlZTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6v7zemBa3hAWqXDiP7tmKmkxxtQhiKkEZQkob4DdCJo"
    return (
        <nav>
            <div>
                <div>
                    <img src={imgUrl} alt="pokemon-logo" className="navbar-image" />
                </div>
            </div>
            <div>❤</div>
        </nav>
    );
};

export default Navbar;