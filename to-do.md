1. try to render state -- success
2. try to render individual line in array --success
3. hardcode number of lines to display, then display --success
4. code user input so user can input number of desired lines to display -- success
5. shuffle each time new text rendered/displayed. -success
6. push new line to array when user input exceeds hard coded array length -- success
7. disable negative number on user input -- success

FIX onchangevalue function! --discarded
OR just create big increase/ buttons --success

7.5 paragraph option
a.  create space ever x number of lines.
b.  create array of paragraphs and a new lines array into it

c. in render, display number of paragraphs based on user input (using loop? )
d. in render, map over state to add <br> tag between each iteration

SAVE PARAGRAPH OPTION FOR NODESCHOOL!

7.6 button to increase -- success,

7.7 button to decrease NODESCHOOL. This would have to access current state
decreaseValue = () => {
  lines.shift();
  console.log(lines);
  this.setState({ lines: lines });

};

8. components:
create  <Button />, --success
8.1 style button,
8.2 style output without components to hold buttons in header or sidebar.
8.21 figure out how to make components out of containers, lifting state into them. Optional.
8.3 modularize & components, etc
8.4 modularize & import functions?
8.5 add flam packaged, patriot ipsum text

9. eventually refactor? Make it all stateful with array inside state from the beginning. Optional.
10. publish to github, go live, do docs, get on with life lol

11. make this a theme that people can insert their own hard-coded lines AND/OR connect to api like the axios bacon ipsum guy did. Optional.
https://create-react-app.dev/docs/adding-images-fonts-and-files
PATRIOT logo in Segoe UI which is already the font in React. I knew it looked familiar! ;-)
don't need to import font

12 add container for text box

figure out css!
convert to gatsby?
https://www.robinwieruch.de/create-react-app-css-modules

13 add a line button

