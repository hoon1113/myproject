document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll(".dropdown-btn");

    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("click", function() {
            const content = this.nextElementSibling;
            const allContents = document.querySelectorAll(".dropdown-content");

            // 모든 드롭다운 닫기
            allContents.forEach((c) => {
                if (c !== content) c.style.display = "none";
            });

            // 클릭한 드롭다운 토글
            content.style.display = (content.style.display === "block") ? "none" : "block";
        });
    });

    // 바깥 클릭 시 드롭다운 닫기
    window.addEventListener("click", function(e) {
        if (!e.target.matches(".dropdown-btn")) {
            const contents = document.querySelectorAll(".dropdown-content");
            contents.forEach((c) => {
                c.style.display = "none";
            });
        }
    });
});
