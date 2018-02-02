## **Week 1: Introduction to Web Development**
## Class 5: CSS Layout and Color, HTML images, and Github Pages

[Schedule](#schedule) | [Announcements](#announcements) | [Objectives](#learning-objectives) | [Notes](#notes) | [Readings](#readings)

<hr></hr>

### Schedule
1. Announcements
1. Quiz and Code Review
1. CSS Layout
1. HTML images and figures
1. Deploy to Github pages
1. Lab prep: code problems

### Announcements
- You did it!!! Week 1 is almost done (:
- Quiz 3 will be published this afternoon and is due late Sunday night.
- Weekly surveys will go out via email today. Your survey responses and feedback in general are helpful and much appreciated!

### Learning Objectives 
- Publish a static webpage on GitHub by creating a gh-pages branch.
- Use HTML image, figure to add images to a webpage.
- Understand CSS layout principles including block, inline, normal, relative, absolute, float, and fixed.
- Style a webpage's layout, text, and images using CSS.

### Notes
- Code Review

- HTML: images and figures
    - the img tag
    - the figure tag

- CSS Layout
    - Design Elements and Principles
        - https://www.canva.com/learn/design-elements-principles/
	- Positioning
		- document flow
		- display
			- block
			- inline
            - inline-block
			- flex
				- https://css-tricks.com/snippets/css/a-guide-to-flexbox/
                - http://blog.karenmenezes.com/2014/apr/13/floats-inline-block-or-display-table-or-flexbox/
		- position
			- static (default)
			- relative
			- absolute
			- fixed
			- sticky (new/experimental)
    - Color
        - multiple options:
            - key words: `white`,`blue`, etc
            - hex values: `#RRGGBB`
            - rgba values: `rgba(red,green,blue,alpha)`
            - hsla values: `hsla(hue, saturation%, lightness%, alpha)`
        - color pallet resources:
            - https://coolors.co/
            - http://paletton.com/
            - https://color.adobe.com

- Deploying our work to the internet!
    - Using GitHub Pages: hosts free static sites on GitHub
	- create a branch: `git checkout -b gh-pages`
	- push to github
	- visit your page: `<your-user-name>.github.io/<repo-name>`

- Lap prep
	- function writing fun! with math!
	- Git workflow review
        1. Fork the class repo
        1. Clone it to your laptop
        1. Make a branch for your work
        1. ~* work * work * work *~
        1. Add changes
        1. Commit changes
        1. Push your branch to GitHub
        1. Make a Pull Request to update your master branch
        1. Pull the updated master to your laptop
        1. Make a new branch and get back to ~* work *~

<hr></hr>

### Readings

##### HTML Chapter 5: "Images"

- p.97: Choosing and storing images
- p.99: \<img> tag with 'height' and 'width' attributes
- p.101: Image alignment in text
- p.107: 3 rules for creating images
- p.109: Image formats (JPG, GIF, PNG)
- Other topics: dimensions, cropping, resolution, vector, animation, transparency, inspecting on web

##### HTML Chapter 11: "Color" (CSS)

- p.249: Foreground color
- p.250: Background color
- pp.251-52: Understanding color (excellent overview)
- p.253: Contrast
- p.254: Opacity
- p.255: HSL colors

##### HTML Chapter 12: "Text" (CSS)

- p.267: Typeface terminology
- p.269: Choosing a Typeface
- p.271: Techniques that offer a wider choice of typefaces
- pp.275-76: Type scales and sizes
- pp.279 and on: text transformations such as bold, italic, upper/lower, underline, strike, leading, spacing, alignment, indenting, drop shadow, first letter
- p.292: Attribute selectors
