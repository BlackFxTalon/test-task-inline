/* main.js */
import "./import/blocks";
import "./import/components";

// btn scripts
const btns = document.querySelectorAll(".btn");

const toggleBtnState = () => {
    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            btn.classList.toggle("btn--pressed");
            if (btn.matches(".btn--pressed")) {
                btn.textContent = "Отменить запрос в сотрудники";
            } else {
                btn.textContent = "Работаете в этой компании?";
            }
        });
    });
};
toggleBtnState();
