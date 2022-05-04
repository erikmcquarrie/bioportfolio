console.log(`test`)
$(() => {

  //found on stacked overflow
  //https://stackoverflow.com/questions/5025941/is-there-a-way-to-get-a-button-element-to-link-to-a-location-without-wrapping
  const home = () => {
        window.location.replace('file:///Users/erik/portfolio/home.html')
  }
  const bio = () => {
        window.location.replace('/Users/erik/portfolio/bio.html')
  }
  const resume = () => {
        window.location.replace('/Users/erik/portfolio/resume.html')
  }
  const projects = () => {
        window.location.replace('/Users/erik/portfolio/projects.html')
  }
  const linkedin = () => {
        window.open('https://www.linkedin.com')
  }

//text changing functions
  const achievements = () => {
    $(`h4`).css("color", "black")
    $('h4').text('Achievements')
    $('h5').text(`I have made many achievements over the years that I can be proud of. These are just a few.`)
  }
  const aboutMe = () => {
    $(`h4`).css("color", "black")
    $('h4').text('About Me')
    $('h5').text('About me description')
  }
  const interests = () => {
    $(`h4`).css("color", "black")
    $('h4').text('Interests')
    $('h5').text('List of my interests')
  }
  const goal = () => {
    $(`h4`).css("color", "black")
    $('h4').text('Goals')
    $('h5').text('List of Goals')
  }

  const h4color = () => {
    $(`h4`).css("color", "red")
  }

  //text change buttons
  $('.achieve').on("click", achievements)
  $('.about').on("click", aboutMe)
  $('.interest').on("click", interests)
  $('.goals').on("click", goal)

  //nav buttons
  $('.bhome').on("click", home)
  $('.bio').on("click", bio)
  $('.resume').on("click", resume)
  $('.projects').on("click", projects)
  $('.linkedin').on("click", linkedin)

  //mouseover
  $(`h4`).on(`mouseover`, h4color)
})
