function place(name, description, imageUrl) {
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
}
place.prototype.showInfo = function () {
    document.getElementById("output").innerText = this.name;
    document.getElementById("description").innerText = this.description;
    const img = document.getElementById("image");
    img.src = this.imageUrl;
    img.style.display = "block";
};
window.addEventListener("DOMContentLoaded", () => {


    const france = new place("FRANCE", "France is a country in Western Europe known for its rich culture, art, and history. It is famous for its iconic landmarks such as the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral. France is also renowned for its cuisine, fashion, and contributions to art and literature.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj19IKiiJdX5BVnSkrZLoITd_xE8GovWCzxQ&s");
    const spain = new place("SPAIN", "Spain is a country in Southwestern Europe known for its vibrant culture, diverse landscapes, and rich history. Famous for its flamenco music, bullfighting, and iconic landmarks like the Sagrada Familia in Barcelona and the Alhambra in Granada, Spain offers a unique blend of tradition and modernity that attracts millions of visitors each year.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj19IKiiJdX5BVnSkrZLoITd_xE8GovWCzxQ&s");
    const italy = new place("ITALY", "Italy is a country in Southern Europe known for its rich history, art, and culture. It is famous for its ancient ruins such as the Colosseum and Roman Forum, Renaissance art in cities like Florence, and iconic landmarks like the Leaning Tower of Pisa. Italy is also renowned for its cuisine, fashion, and contributions to art and literature.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj19IKiiJdX5BVnSkrZLoITd_xE8GovWCzxQ&s");

    const japan = new place("JAPAN", "Japan is an island country in East Asia known for its unique blend of traditional culture and modern technology. It is famous for its cherry blossoms, ancient temples, and vibrant cities like Tokyo. Japan offers a rich cultural experience with its tea ceremonies, sumo wrestling, and traditional arts such as calligraphy and ikebana.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj19IKiiJdX5BVnSkrZLoITd_xE8GovWCzxQ&s"
    )

 const countries = [france, spain, italy, japan];
    const cards = document.querySelectorAll(".card");
   
  

    cards[0].addEventListener("click", () => france.showInfo());

    cards[1].addEventListener("click", () => japan.showInfo());

    cards[2].addEventListener("click", () => italy.showInfo());

    cards[3].addEventListener("click", () => spain.showInfo());
    
});