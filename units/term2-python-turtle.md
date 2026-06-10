# Intro to Python using the Turtle
## Lesson 1: Getting started
1. Set up Visual Studio Code
2. draw a red box filled with yellow
3. draw a star outlined with the color rgb(255,255,0) and filled with rgb(0,255,255)
## Lesson 2: The Turtle Screen
In this lesson we will go over how to to setup the screen where your turtle will draw. 
- `speed()` — sets how fast the turtle moves and draws. Values range from 1 (slowest) to 10 (fast), and 0 means fastest with no animation delay.
- `tracer()` — controls how often the screen updates. Use `tracer(0)` to turn off automatic updates so the turtle draws instantly behind the scenes. Call `screen.update()` when you're ready to show the result.
## Lesson 3: Loops
draw a square that is 255 pixels tall but do not draw the outline of the square. Using a loop, draw a line that is 255 pixels, then move over one pixel and draw another line right next to it and do that 255 times until you have a solid square.
## Lesson 4: Gradients
Using the code from Lesson 3, create a seperate variable for r, g, and b so that r = 255, g = 255 and b =0 (yellow). set the color of the first line to rgb(r,g,b). After you draw each line subtract 1 from the green value so that on the last line r = 255, g = 0, b = 0 (red).
## Lesson 5: Functions
1. Create a function named bird that takes a parameter, radius, that will make one bird from two arcs with a randomly chosen radius.
2. Create a second function called birds that takes a parameter of num_birds that will run a loop that contains two lines.  The first line will move to a random location and the second line will run the function named bird. The loop will run num_birds times 
## Lesson 6: Draw a sun
1. Draw a yellow dot -- rgb(255,255,0) -- dot so that the dot extends off the top of the screen. It could be anywhere across the top of the screen.
2. Sun Rays, starting at the middle of the sun dot turn the turtle using setheading(0) and go forward then backwards. Then add some amount to the heading and go farward an back again. Do this as many times as to need to, to make rays coming out of the sun. Extra Credit for changing colors. 
3. Gradient. We are now going to make several dots on top of eachother each one smaller and each one more red. In a loop, reduce the size of the dot and slightly change the color of the dot and draw the new dot on top of th elast one
## Lesson 7: Draw a scene
Combine ALL of the previous lessons (gradient background for a sky, birds, sun) and at least two other elements (ie, grass, flowers, clouds, etc)