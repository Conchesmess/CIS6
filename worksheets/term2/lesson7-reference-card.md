# Lesson 7 Reference Card

Use this alongside your `scene.py`. Each section shows the core pattern from that lesson — adapt it for your scene.

---

## Starter code (already in scene.py)

```python
import turtle
import random

screen = turtle.Screen()
screen.setup(600, 500)
screen.title("My Scene")
screen.colormode(255)
screen.tracer(0)

t = turtle.Turtle()
t.speed(0)
t.hideturtle()

# your code here

screen.update()
screen.mainloop()
```

---

## L2 — Moving to a position

```python
t.penup()
t.goto(x, y)        # move without drawing
t.pendown()

t.setheading(90)    # 0=right  90=up  180=left  270=down
```

---

## L3 — For loop + solid block of color

```python
t.penup()
t.goto(start_x, start_y)
t.pendown()
t.setheading(90)

for i in range(255):
    t.forward(255)
    t.penup()
    t.goto(t.xcor() + 1, start_y)
    t.pendown()
```

---

## L4 — Gradient (yellow → red)

```python
r = 255
g = 255
b = 0

t.penup()
t.goto(start_x, start_y)
t.pendown()
t.setheading(90)

for i in range(255):
    t.pencolor(r, g, b)
    t.forward(255)
    t.penup()
    t.goto(t.xcor() + 1, start_y)
    t.pendown()
    g -= 1
```

---

## L5 — Birds

```python
def bird(radius):
    t.setheading(135)
    t.circle(radius, 90)
    t.setheading(135)
    t.circle(radius, 90)

def birds(num_birds):
    for i in range(num_birds):
        t.penup()
        t.goto(random.randint(-300, 300), random.randint(-200, 200))
        t.pendown()
        bird(random.randint(20, 60))
```

---

## L6 — Sun

```python
SUN_X = 0
SUN_Y = 250

# Rays (draw first, behind the sun)
t.penup()
t.goto(SUN_X, SUN_Y)
t.pendown()
for angle in range(0, 360, 20):
    t.setheading(angle)
    t.forward(200)
    t.backward(200)
t.penup()

# Gradient sun (draw on top of rays)
r = 255
g = 255
b = 0
dot_size = 350

t.goto(SUN_X, SUN_Y)
for i in range(255):
    t.dot(dot_size, (r, g, b))
    dot_size -= 1
    g -= 1
```

---

## Order matters — draw back to front

Things drawn first appear *behind* things drawn later.
A typical order for a sky scene:

1. Gradient sky (background — draw first)
2. Sun rays
3. Sun gradient dots
4. Any background elements (mountains, hills)
5. Birds
6. Foreground elements (grass, flowers, etc.)
