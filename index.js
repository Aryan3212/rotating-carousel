const total_points = document.getElementsByClassName("dot");

console.log(total_points);

const distribution = 360.0 / total_points.length;

let regExp = /\(([^)]+)\)/;

console.log(distribution);

function rotationEvent(e) {
    for (let i = 0; i < total_points.length; ++i) {
        const initial_rotation_value = Number.parseInt(
            regExp.exec(total_points[i].style.transform)[1].slice(0, -3)
        );
        total_points[i].style.transform = `rotate(${
            initial_rotation_value + distribution
        }deg)`;
    }
}

for (let i = 0; i < total_points.length; ++i) {
    total_points[i].style.transition = `transform 1s linear`;
    total_points[i].style.transform = `rotate(${Number.parseInt(
        distribution * i
    )}deg)`;
    total_points[i].addEventListener("click", rotationEvent);
}
