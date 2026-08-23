const KEY = "taurus-election-demo-v1";
const defaultPositions = [
  { id: "head-boy", name: "Head Boy" },
  { id: "head-girl", name: "Head Girl" },
  { id: "deputy-head-boy", name: "Deputy Head Boy" },
  { id: "deputy-head-girl", name: "Deputy Head Girl" },
  { id: "red", name: "Red House / Bradford House Captain" },
  { id: "blue", name: "Blue House / Aberdeen House Captain" },
  { id: "yellow", name: "Yellow House / Hereford House Captain" },
  { id: "green", name: "Green House / Brangus House Captain" },
  { id: "drama", name: "Drama / Debate Society Head" },
  { id: "sports", name: "Sports Society Head" },
  { id: "media", name: "Media Society Head" },
];
const demoCandidates = {
  "head-boy": [
    ["ahmed-hasan-khalid", "Ahmed Hasan Khalid", "Sr-III / Class-X", "🚀"],
    ["ilyas-bhutto", "Ilyas Bhutto", "Sr-III / Class-X", "🛡️"],
    ["m-umer-pasha", "M. Umer Pasha", "Sr-III / Class-X", "🦇"],
    ["syed-sadoon-ali", "Syed Sadoon Ali", "Sr-III / Class-X", "🪔"],
    ["hamza-javaid", "Hamza Javaid", "Sr-III / Class-X", "🏆"],
    ["ibaad-ali", "Ibaad Ali", "Sr-III / Class-X", "⚔️"],
    ["mashood-ali-khan", "Mashood Ali Khan", "Sr-III / Class-X", "🌳"],
    ["zakwan-ali", "Zakwan Ali", "Sr-III / Class-X", "🔥"],
    ["sm-shamraiz-ali-khan", "S.M. Shamraiz Ali Khan", "Sr-III / Class-X", "🥇"],
    ["ahmed-shaikh", "Ahmed Shaikh", "Sr-III / Class-X", "🔦"],
  ],

  "head-girl": [
    ["ayesha-shoaib", "Ayesha Shoaib", "Sr-III / Class-X", "🎧"],
    ["nareen-kamran", "Nareen Kamran", "Sr-III / Class-X", "🕊️"],
    ["minna-shams", "Minna Shams", "Sr-III / Class-X", "🪶"],
    ["momina-binto-ahsan", "Momina Binto Ahsan", "Sr-III / Class-X", "📖"],
    ["zehra-malik", "Zehra Malik", "Sr-III / Class-X", "☀️"],
  ],
"deputy-head-boy": [
  ["ahmed-hasan-khalid", "Ahmed Hasan Khalid", "Sr-III / Class-X", "🚀"],
  ["ilyas-bhutto", "Ilyas Bhutto", "Sr-III / Class-X", "🛡️"],
  ["m-umer-pasha", "M. Umer Pasha", "Sr-III / Class-X", "🦇"],
  ["syed-sadoon-ali", "Syed Sadoon Ali", "Sr-III / Class-X", "🪔"],
  ["hamza-javaid", "Hamza Javaid", "Sr-III / Class-X", "🏆"],
  ["ibaad-ali", "Ibaad Ali", "Sr-III / Class-X", "⚔️"],
  ["mashood-ali-khan", "Mashood Ali Khan", "Sr-III / Class-X", "🌳"],
  ["zakwan-ali", "Zakwan Ali", "Sr-III / Class-X", "🔥"],
  ["sm-shamraiz-ali-khan", "S.M. Shamraiz Ali Khan", "Sr-III / Class-X", "🥇"],
  ["ahmed-shaikh", "Ahmed Shaikh", "Sr-III / Class-X", "🔦"],
],

"deputy-head-girl": [
  ["ayesha-shoaib", "Ayesha Shoaib", "Sr-III / Class-X", "🎧"],
  ["nareen-kamran", "Nareen Kamran", "Sr-III / Class-X", "🕊️"],
  ["minna-shams", "Minna Shams", "Sr-III / Class-X", "🪶"],
  ["momina-binto-ahsan", "Momina Binto Ahsan", "Sr-III / Class-X", "📖"],
  ["zehra-malik", "Zehra Malik", "Sr-III / Class-X", "☀️"],
],

  red: [
    ["m-yahya", "M. Yahya", "Bradford", "⭐"],
    ["minahil-adnan", "Minahil Adnan", "Bradford", "🌙"],
    ["m-sufyan-burki", "M. Sufyan Burki", "Bradford", "🕐"],
  ],

  blue: [
    ["usman-amir", "Usman Amir", "Aberdeen", "♞"],
    ["mariam-karim", "Mariam Karim", "Aberdeen", "☀️"],
    ["zunaira-adnan", "Zunaira Adnan", "Aberdeen", "🌷"],
    ["usman-azeem", "Usman Azeem", "Aberdeen", "🎓"],
    ["abdullah-imran", "Abdullah Imran", "Aberdeen", "🔗"],
    ["sameeha-kamran", "Sameeha Kamran", "Aberdeen", "🕷️"],
  ],

  yellow: [
    ["m-absar-ali", "M. Absar Ali", "Hereford", "🔑"],
    ["aimen-hasan", "Aimen Hasan", "Hereford", "✨"],
    ["mahad-alam", "Mahad Alam", "Hereford", "🕯️"],
  ],

  green: [
    ["nargis-fatima", "Nargis Fatima", "Brangus", "🌀"],
    ["nabaht-sana", "Nabaht Sana", "Brangus", "🫧"],
    ["syeda-fatima-jaffri", "Syeda Fatima Jaffri", "Brangus", "🦅"],
    ["hibban-shoaib", "Hibban Shoaib", "Brangus", "🧩"],
  ],

  drama: [
    ["syed-aryan-sohail", "Syed Aryan Sohail", "Debate & Drama", "⚡"],
    ["sami-nawaz", "Sami Nawaz", "Debate & Drama", "🎤"],
    ["syeda-kanza-fatima-zaidi", "Syeda Kanza Fatima Zaidi", "Debate & Drama", "🎲"],
    ["khurram-abdur-rehman", "Khurram Abdur Rehman", "Debate & Drama", "🌱"],
    ["eman-israr", "Eman Israr", "Debate & Drama", "☂️"],
  ],

  media: [
    ["m-uzair-mirza", "M. Uzair Mirza", "Media Society", "➡️"],
    ["ebrahim", "Ebrahim", "Media Society", "✏️"],
    ["aimen-aftab", "Aimen Aftab", "Media Society", "📷"],
  ],

  sports: [
    ["hanzala-siddiqui", "Hanzala Siddiqui", "Sports Society", "🏒"],
    ["m-affan-siddiqui", "M. Affan Siddiqui", "Sports Society", "🐐"],
    ["rabayal-kashif", "Rabayal Kashif", "Sports Society", "🎯"],
    ["momal-shaheen", "Momal Shaheen", "Sports Society", "⚽"],
    ["m-rayyan-ali", "M. Rayyan Ali", "Sports Society", "🏏"],
    ["daneen", "Daneen", "Sports Society", "♟️"],
    ["abdur-rehman", "Abdur Rehman", "Sports Society", "🏸"],
  ],
};
function fresh() {
  const candidates = {};

  for (const p of defaultPositions) {
    candidates[p.id] = (demoCandidates[p.id] || []).map((x) => ({
      id: x[0],
      name: x[1],
      className: x[2],
      symbol: x[3],
      picture: "",
    }));
  }

  return {
    positions: defaultPositions,
    candidates,
    votes: [],
    threshold: 10,
    submitted: false,
  };
}
let state = JSON.parse(localStorage.getItem(KEY) || "null") || fresh();
function save() {
  localStorage.setItem(KEY, JSON.stringify(state));
}
function initials(name) {
  return name
    .split(/\s+/)
    .map((x) => x[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
function avatarHTML(c) {
  return c.picture
    ? `<img class="avatar" src="${c.picture}" alt="">`
    : `<div class="avatar">${initials(c.name)}</div>`;
}
function render() {
  document.getElementById("voteCount").textContent = state.votes.length;
  document.getElementById("thresholdText").textContent =
    `Results unlock at ${state.threshold} votes`;
  document.getElementById("candidatePosition").innerHTML = state.positions
    .map((p) => `<option value="${p.id}">${p.name}</option>`)
    .join("");
  renderBallot();
  renderResults();
  renderSubmitted();
}
function updateHeadDeputyRestrictions() {
  const headBoy = document.querySelector(
    'input[name="head-boy"]:checked'
  )?.value;

  const deputyHeadBoy = document.querySelectorAll(
    'input[name="deputy-head-boy"]'
  );

  deputyHeadBoy.forEach((input) => {
    const shouldDisable = input.value === headBoy;

    input.disabled = shouldDisable;

    if (shouldDisable && input.checked) {
      input.checked = false;
      input.closest(".candidate")?.classList.remove("selected");
    }

    input.closest(".candidate")?.classList.toggle(
      "disabled",
      shouldDisable
    );
  });

  const headGirl = document.querySelector(
    'input[name="head-girl"]:checked'
  )?.value;

  const deputyHeadGirl = document.querySelectorAll(
    'input[name="deputy-head-girl"]'
  );

  deputyHeadGirl.forEach((input) => {
    const shouldDisable = input.value === headGirl;

    input.disabled = shouldDisable;

    if (shouldDisable && input.checked) {
      input.checked = false;
      input.closest(".candidate")?.classList.remove("selected");
    }

    input.closest(".candidate")?.classList.toggle(
      "disabled",
      shouldDisable
    );
  });
}
document.querySelectorAll(".candidate input").forEach((i) =>
  i.addEventListener("change", () => {
    document
      .querySelectorAll(`input[name="${i.name}"]`)
      .forEach((x) =>
        x.closest(".candidate").classList.toggle(
          "selected",
          x.checked
        )
      );

    updateHeadDeputyRestrictions();
    validate();
  })
);
function renderBallot() {
  const root = document.getElementById("positions");

  root.innerHTML = state.positions
    .map((p) => {
      const cs = state.candidates[p.id] || [];

      return `
        <div class="position" data-position="${p.id}">
          <h3>${p.name}</h3>

          <div class="candidates">
            ${cs
              .map(
                (c) => `
                  <label class="candidate">
                    <input
                      type="radio"
                      name="${p.id}"
                      value="${c.id}"
                    >

                    <span>${avatarHTML(c)}</span>

                    <span class="candidate-info">
                      <strong>${c.name}</strong>
                      <small>${c.className}</small>
                    </span>

                    <span class="symbol">${c.symbol}</span>
                  </label>
                `
              )
              .join("")}
          </div>
        </div>
      `;
    })
    .join("");

  document.querySelectorAll(".candidate input").forEach((i) =>
    i.addEventListener("change", () => {
      document
        .querySelectorAll(`input[name="${i.name}"]`)
        .forEach((x) =>
          x.closest(".candidate").classList.toggle(
            "selected",
            x.checked
          )
        );

      updateHeadDeputyRestrictions();
      validate();
    })
  );

  updateHeadDeputyRestrictions();

  document
    .getElementById("ballotSection")
    .classList.toggle("hidden", state.submitted);
}
updateHeadDeputyRestrictions();

document
  .getElementById("ballotSection")
  .classList.toggle("hidden", state.submitted);

function validate() {
  const missing = state.positions.filter(
    (p) => !document.querySelector(`input[name="${p.id}"]:checked`),
  );
  document.getElementById("validationText").textContent = missing.length
    ? `${missing.length} position(s) still need a selection.`
    : "All positions selected. Ready to submit.";
  document.getElementById("submitVote").disabled = !!missing.length;
}
function renderSubmitted() {
  document
    .getElementById("submittedSection")
    .classList.toggle("hidden", !state.submitted);
}
function validate() {
  const missing = state.positions.filter(
    (p) => !document.querySelector(`input[name="${p.id}"]:checked`)
  );

  document.getElementById("validationText").textContent = missing.length
    ? `${missing.length} position(s) still need a selection.`
    : "All positions selected. Ready to submit.";

  document.getElementById("submitVote").disabled = !!missing.length;
}
function renderResults() {
  const unlocked = state.votes.length >= state.threshold;
  const sec = document.getElementById("resultsSection");
  sec.classList.toggle("hidden", !unlocked);
  if (!unlocked) return;
  document.getElementById("results").innerHTML = state.positions
    .map((p) => {
      const counts = {};
      (state.candidates[p.id] || []).forEach((c) => (counts[c.id] = 0));
      state.votes.forEach((v) => {
        if (v[p.id]) counts[v[p.id]] = (counts[v[p.id]] || 0) + 1;
      });
      const max = Math.max(1, ...Object.values(counts));
      return `<div class="result-position"><h3>${p.name}</h3>${(state.candidates[p.id] || []).map((c) => `<div class="bar-row"><span class="bar-label">${c.name}</span><div class="bar-track"><div class="bar-fill" style="width:${(counts[c.id] / max) * 100}%"></div></div><span class="bar-value">${counts[c.id]}</span></div>`).join("")}</div>`;
    })
    .join("");
}
function notice(msg) {
  const n = document.getElementById("notice");
  n.textContent = msg;
  n.classList.remove("hidden");
  setTimeout(() => n.classList.add("hidden"), 3500);
}
document.getElementById("submitVote").onclick = () => { if (state.submitted) return;

  const ballot = {};

  for (const p of state.positions) {
    const el = document.querySelector(`input[name="${p.id}"]:checked`);

    if (!el) {
      notice("Please select a candidate for every position.");
      return;
    }

    ballot[p.id] = el.value;
  }

  // PUT IT HERE
  if (
    ballot["head-boy"] &&
    ballot["deputy-head-boy"] &&
    ballot["head-boy"] === ballot["deputy-head-boy"]
  ) {
    notice(
      "The same candidate cannot be selected for Head Boy and Deputy Head Boy."
    );
    return;
  }

  if (
    ballot["head-girl"] &&
    ballot["deputy-head-girl"] &&
    ballot["head-girl"] === ballot["deputy-head-girl"]
  ) {
    notice(
      "The same candidate cannot be selected for Head Girl and Deputy Head Girl."
    );
    return;
  }

  state.votes.push(ballot);
  state.submitted = true;
  save();
  render();
  notice("Vote recorded successfully.");
};
let adminLoggedIn = false;
const ADMIN_PIN = "2468";
function renderAdmin() {
  document
    .getElementById("adminLoginView")
    .classList.toggle("hidden", adminLoggedIn);
  document
    .getElementById("adminDashboard")
    .classList.toggle("hidden", !adminLoggedIn);
  if (!adminLoggedIn) return;
  document.getElementById("adminVoteCount").textContent = state.votes.length;
  document.getElementById("adminThreshold").textContent = state.threshold;
  document.getElementById("thresholdInput").value = state.threshold;
  renderCandidateManager();
}
function renderCandidateManager() {
  const root = document.getElementById("candidateManager");
  root.innerHTML = state.positions
    .map(
      (p) =>
        `<div class="managed-position"><h4>${p.name}</h4><div class="managed-candidates">${(state.candidates[p.id] || []).map((c) => `<div class="managed-card">${avatarHTML(c)}<div><strong>${c.name}</strong><small>${c.className} · ${c.symbol}</small></div><button class="remove-candidate" data-id="${c.id}" data-position="${p.id}">Remove</button></div>`).join("")}</div></div>`,
    )
    .join("");
  document.querySelectorAll(".remove-candidate").forEach(
    (btn) =>
      (btn.onclick = () => {
        if (confirm("Remove this candidate?")) {
          const p = btn.dataset.position;
          state.candidates[p] = state.candidates[p].filter(
            (c) => c.id !== btn.dataset.id,
          );
          save();
          render();
          renderAdmin();
          notice("Candidate removed.");
        }
      }),
  );
}
document.getElementById("adminLogin").onclick = () => {
  if (document.getElementById("adminLoginPin").value !== ADMIN_PIN) {
    notice("Incorrect administrator PIN.");
    return;
  }
  adminLoggedIn = true;
  document.getElementById("adminLoginPin").value = "";
  renderAdmin();
  notice("Administrator access granted.");
};
document.getElementById("adminLogout").onclick = () => {
  adminLoggedIn = false;
  renderAdmin();
  notice("Logged out of administration.");
};
document.getElementById("adminOpen").onclick = () => {
  state.submitted = false;
  save();
  render();
  renderAdmin();
  window.scrollTo({ top: 0, behavior: "smooth" });
  notice("Next student ballot is now open.");
};
document.getElementById("adminShowResults").onclick = () => {
  if (state.votes.length < state.threshold) {
    notice(`Results are locked until ${state.threshold} votes are reached.`);
    return;
  }
  document.getElementById("resultsSection").classList.remove("hidden");
  document
    .getElementById("resultsSection")
    .scrollIntoView({ behavior: "smooth" });
};
document.getElementById("saveThreshold").onclick = () => {
  state.threshold = Math.max(
    1,
    Number(document.getElementById("thresholdInput").value) || 10,
  );
  save();
  render();
  renderAdmin();
  notice("Results threshold updated.");
};
document.getElementById("resetElection").onclick = () => {
  if (confirm("Reset all demo votes and candidate data?")) {
    state = fresh();
    save();
    render();
    renderAdmin();
    notice("Demo election reset.");
  }
};
document.getElementById("addCandidate").onclick = () => {
  const position = document.getElementById("candidatePosition").value;
  const name = document.getElementById("candidateName").value.trim();
  const cls =
    document.getElementById("candidateClass").value.trim() || "Student";
  const symbol = document.getElementById("candidateSymbol").value.trim() || "★";
  const file = document.getElementById("candidatePicture").files[0];
  if (!name) {
    notice("Enter a candidate name.");
    return;
  }
  const add = (picture) => {
    state.candidates[position].push({
      id: position + "-" + Date.now(),
      name,
      className: cls,
      symbol,
      picture: picture || "",
    });
    save();
    document.getElementById("candidateName").value = "";
    document.getElementById("candidateClass").value = "";
    document.getElementById("candidateSymbol").value = "";
    document.getElementById("candidatePicture").value = "";
    render();
    renderAdmin();
    notice("Candidate added.");
  };
  if (file) {
    const reader = new FileReader();
    reader.onload = () => add(reader.result);
    reader.readAsDataURL(file);
  } else add("");
};
render();
validate();
renderAdmin();
