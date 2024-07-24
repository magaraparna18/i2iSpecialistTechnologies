// const courses = [
//     { name: "Full Stack Development", url: "full-stack-development.html" },
//     { name: "Data Science", url: "data-science.html" },
//     { name: "Digital Marketing", url: "digital-marketing.html" },
//     { name: "Software Testing", url: "software-testing.html" },
//     { name: "Data Analytics", url: "data-analytics.html" }
// ];

// function showSuggestions() {
//     const suggestions = document.getElementById('suggestions');
//     suggestions.innerHTML = '';

//     courses.forEach(course => {
//         const suggestionItem = document.createElement('div');
//         suggestionItem.textContent = course.name;
//         suggestionItem.classList.add('suggestion-item');
//         suggestionItem.onclick = () => redirectToCourse(course.url);
//         suggestions.appendChild(suggestionItem);
//     });

//     suggestions.style.display = 'block'; // Show suggestions when focused
// }

// function filterSuggestions(query) {
//     const suggestions = document.getElementById('suggestions');
//     suggestions.innerHTML = '';

//     if (query.length === 0) {
//         showSuggestions();
//         return;
//     }

//     const filteredCourses = courses.filter(course => course.name.toLowerCase().includes(query.toLowerCase()));
//     filteredCourses.forEach(course => {
//         const suggestionItem = document.createElement('div');
//         suggestionItem.textContent = course.name;
//         suggestionItem.classList.add('suggestion-item');
//         suggestionItem.onclick = () => redirectToCourse(course.url);
//         suggestions.appendChild(suggestionItem);
//     });

//     suggestions.style.display = 'block'; // Show suggestions when there are matches
// }

// function redirectToCourse(url) {
//     if (url) {
//         window.location.href = url;
//     } else {
//         const searchTerm = document.getElementById('srch-term').value.toLowerCase();
//         const course = courses.find(course => course.name.toLowerCase() === searchTerm);

//         if (course) {
//             window.location.href = course.url;
//         } else {
//             alert('Course not found!');
//         }
//     }
// }

// document.addEventListener('click', function(event) {
//     const suggestions = document.getElementById('suggestions');
//     const searchBox = document.getElementById('srch-term');

//     if (!searchBox.contains(event.target) && !suggestions.contains(event.target)) {
//         suggestions.style.display = 'none';
//     }
// });
