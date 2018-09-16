# React Kennel

Following the [new tutorial series](https://github.com/nashville-software-school/client-side-mastery/tree/master/book-4-the-apprentice) on React.

## Where I got stuck

I got stuck on [this page](https://github.com/nashville-software-school/client-side-mastery/blob/master/book-4-the-apprentice/chapters/REACT_REUSABLE_COMPONENTS.md), getting only the following error: "Syntax error: C:/Users/Erin of the Lake/workspace/Repos/ReactKennel/src/components/employee/EmployeeList.js: Adjacent JSX elements must be wrapped in an enclosing tag (20:24)"

IDFK why it's throwing this error because I am still only returning one element, so the sibling tags still only have one parent. There are no unclosed tags.

## Advanced Challenges to Revisit:

* [Link animals and owners](https://github.com/nashville-software-school/client-side-mastery/blob/master/book-4-the-apprentice/chapters/COMPONENT_STATE_PROPS.md)
* [Searching Data](https://github.com/nashville-software-school/client-side-mastery/blob/master/book-4-the-apprentice/chapters/REACT_INITIAL_STATE.md)
* [Abstract Artist](https://github.com/nashville-software-school/client-side-mastery/blob/master/book-4-the-apprentice/chapters/API_MODULES.md)
* [Editing Animals](https://github.com/nashville-software-school/client-side-mastery/blob/master/book-4-the-apprentice/chapters/REACT_FORMS.md)
* [Remember Me](https://github.com/nashville-software-school/client-side-mastery/blob/master/book-4-the-apprentice/chapters/REACT_CONDITIONAL_RENDERING.md)

## To Run

1. Clone the repo.
2. From the command line, cd into the project directory
3. ```npm install```
4. ```npm start```
5. Open a second terminal and cd into the "api" directory in this project.
6. ```json-server -p 5002 -w data.json```