# Descending String Interval in Terminal

This is a program that will countdown from 10 in **Terminal**. Instead of using actual numbers for the countdown, have the output display a string consisting of asterisk marks, corresponding to the number in the countdown. Each countdown tick should be displayed on a new line.

To try this out, do the following:

+ Download or clone the repo

+ Make sure that you have `Nodejs` installed on your computer.

+ if and when you do have `Nodejs` installed, type the following in **Terminal**:

```
node triangleOpp.js
```

The script that resides in `triangleOpp.js` will print out to the **Terminal** console. In order for `Node` to run, you need to first type `node` followed by the name of the file you want to execute in **Terminal**, including the file extension.

I use `Eslint` to lint my **JS** code, so I also installed it as a dev dependency. These are the steps I took to make it happen:

+ I made sure I had `Nodejs installed`. I did. As it happens, I hadn't updated in a while, so I did that by typing 

`nvm install node`

The latest version of `Node` is installed with this command. In my case today, **3.5.18**, it is **9.7.1**.

What is `NVM`? It stands for `Node Version Manager`. It permits you to navigate easily between verious versions of `Nodejs`. This is especially useful in **JS testing**. I just came across an article that gives a great overview of **JS Testing** called [An Overview of JavaScript Testing in 2017](https://medium.com/powtoon-engineering/a-complete-guide-to-testing-javascript-in-2017-a217b4cd5a2a). There is also a link to the updated version of the article for 2018.

`NVM` makes it easier to install the latest version of `Nodejs`. To learn more about it, please visit [NVM on Github](https://github.com/creationix/nvm).

What is `ESLint`? `Eslint` is a `code linter` not limited to just **JS**, that analyzes code for potential errors. Check out this question on **Stackoverflow** entitled [What is Linting?](https://stackoverflow.com/questions/8503559/what-is-linting) to learn more.

However, you have to configure `ESLint` in your project in order to make it work for you there. I have `ESLint` installed globally on my computer (`npm install eslint -g`),and then I have to install it locally with `npm` inside the root directory of the project I am working on. I do that by typing `npm install eslint --save-dev` in **Terminal**. After I have done that, I have to **initialize** `ESLint` in order to create an `.eslintrc.json` file that configures `ESLint` in the root directory of my project. This file not only **turns on** `ESLint` in your project, but it also makes it completely configurable. You can turn off every rule, or turn on as many as you want via the `.eslintrc.json` file. 

In order to implement the configuration of `ESLint` in my project locally, I have to type the following command in **Terminal**:

```
node_modules/.bin/eslint --init
```

Just as `npm init` initializes `npm` in a project root directory, so does the command above initialize `ESLint`. When I hit return, the following prompt shows up in **Terminal**:

```
How would you like to configure ESLint? (Use arrow keys)
❯ Answer questions about your style
  Use a popular style guide
  Inspect your JavaScript file(s)
```
The default selection is `Answer questions about your style`. I tend to go with that option, so I just hit return. After I hit return, the following appears in `Terminal`:

```
How would you like to configure ESLint? Answer questions about your style
? Are you using ECMAScript 6 features? (y/N)
```

I do use `ES6`, so I choose `y`. Then again I hit return. Next, the following appears:

```
Are you using ES6 modules?
Yes
No
```

I choose `Yes`, because I am already using `ES6` **features**. Generally, the probability could be very high that I would use `ES6 modules` in my projects if called for.  Again, I am just covering my bases.

Then the following shows up:

```
Where will your code run?

◉ Browser
◉ Node
```

The above is asking me will I be only using the **Browser**, or will I also be using **Nodejs**? I always select both by default just to cover my bases. But for this particular assignment, I know that I most definitely am using `Nodejs`, so I select both `Browser` and `Node`. Then I hit return. Then the following appears:

```
Do you use CommonJS?

Yes
No
```

I answer `yes` by default here, because I need it when using `ES6 modules`. To learn more about `CommonJS`, why it was created, and what it does, please visit the article [How the module system, CommonJS & require works](https://blog.risingstack.com/node-js-at-scale-module-system-commonjs-require/). It goes into detail about how and why `CommonJS` came about. `CommonJS` uses the keyword `require`, but today we also have the option of using the `import` keyword which achieves the same thing. `ES6 (ECMA2015)` introduced ***that*** feature.

After hitting return again, the following prompt comes up:

```
 Do you use JSX? (y/N)
 ```

 With this project, I know for sure that I will not be using `React`, so I choose no. **Facebook**, the creator of React (specifically [Jordan Walke](https://en.wikipedia.org/wiki/React_(JavaScript_library))) created `JSX` because:

 ```
 JSX is an XML-like syntax extension to ECMAScript without any defined semantics. It's NOT intended to be implemented by engines or browsers. It's NOT a proposal to incorporate JSX into the ECMAScript spec itself. It's intended to be used by various preprocessors (transpilers) to transform these tokens into standard ECMAScript.
 ```
 It is part of **React**'s `Virtual DOM`. That's an entirely different post, but it puts `JSX`'s role in **React** in clearer perspective. To view the original `JSX` **specification draft** created by **Facebook**, please visit [Draft: JSX Specification](https://facebook.github.io/jsx/). The langauge is really quite fascinating!

 After I hit return, the next prompt is:

 ```
 What style of indentation do you use?

Tabs
Spaces
 ```
 I like `Tabs` because they are cleaner, so I choose `Tabs`.

 Then:

 ```
 What quotes do you use for strings? (Use arrow keys)
❯ Double
  Single
```

Here, I choose `Single`. Again, cleaner. Then I hit return.

Next:

```
What line endings do you use?

Unix
Windows
```

Of course I choose `Unix`, because I am on a `Mac`.

Next: 

```
Do you require semicolons?
```

I choose `n` and hit return.

Next (and last):

```
What format do you want your config file to be in?

JavaScript
  YAML
  JSON
```

I chose `JSON` because I like to keep things consistent. I already have a `package.json` file, so I go with an `eslintrc.json` file and hit return. This is what subsequently prints to the **Terminal** console:

```
Successfully created .eslintrc.json file in /Users/mariacam/Development/descending-string-interval
```

And my `eslintrc.json` appears in the root directory of the `Descending String Interval Project`.

Finally, I go into my `eslintrc.json` file and make a couple of tweaks. Why? Because I want to `turn off` a couple of rules. Otherwise, I would constantly be throwing phantom errors if I did not. Initially, this is what I have in the `eslintrc.json` file:

```
{
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
}
```

Then what I do is change `"error", "single"` under `quotes` to "0" and `"error", "always"` under `semi`(stands for semicolon) to "0" as well. `0` just means that you are completely turning off that rule. This way, if I ever decide (or need) to use double quotes or semicolons, I won't throw an error. The reverse would apply too.

Did you know that **Nicholas Zakas**, the author of books such as [Understanding ECMAScript 6: The Definitive Guide for JavaScript Developers](https://www.amazon.com/Understanding-ECMAScript-Definitive-JavaScript-Developers/dp/1593277571/ref=asap_bc?ie=UTF8) and [The Principles of Object-Oriented JavaScript](https://www.amazon.com/Principles-Object-Oriented-JavaScript-Nicholas-Zakas/dp/1593275404/ref=asap_bc?ie=UTF8) is also the creator of `ESLint`?

To learn more about `ESLint`, please visit [ESLint](https://eslint.org/).

I articulate my code/projects so I can have documentation of my processes that I can refer back to, but I hope that things like this that benefit me alone might also be of benefit to others. Thanks for stopping by!

**Related Links**:

[How to Install Node.js and NPM on a Mac](http://blog.teamtreehouse.com/install-node-js-npm-mac)


















