"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Content {
    
    content(req, res) {
        
        
        let x = print('hello text');
        let y = print(['hello', 'text', 'array']);
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<h1 style='color: red;'>Hello Node.js!</h1>");
        res.write("<h1 style='color: green;'>Hello TypeScript!</h1>");
        res.write("<h1 style='color: blue;'>Hello Heroku!</h1>");
        res.write("<h1 style='color: black;'>Hello Jedlik!</h1>");
        res.write("<a href='https://github.com/vaszabii/UnionTypes' target='_blank'>" +
            "https://github.com/vaszabii/UnionTypes</a><br>");
        res.end();
        function print(text: string | string[]): string {
            if (typeof text === 'string') {
                return text;
            }
        
            // compiler now knows that you can use join
            // and that variable type is definitely string[]
        
            return text.join(' ');
        }
        
        console.log(x);
        console.log(y);
    }
}
exports.default = Content;
//# sourceMappingURL=content.js.map
