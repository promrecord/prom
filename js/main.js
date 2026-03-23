// 기본 로드 체크
console.log("PROM RECORD MAIN PAGE LOADED");

// 카드 hover 효과 확장 (선택)
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 10px 20px rgba(255,77,166,0.3)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "none";
  });
});