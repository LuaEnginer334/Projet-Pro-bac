// ===== DONNÉES DU QUIZ =====
const quizData = [
    // QCM (Choix multiples)
    {
        type: "qcm",
        question: "Quel est le premier réflexe en cas d'incendie ?",
        answers: [
            { text: "Essayer d'éteindre le feu à tout prix", correct: false },
            { text: "Évacuer les lieux immédiatement", correct: true },
            { text: "Appeler la police d'abord", correct: false },
            { text: "Fermer toutes les portes" , correct: false }
        ],
        explanation: "L'évacuation est la priorité absolue. La vie des personnes est plus importante que les biens matériels."
    },
    {
        type: "qcm",
        question: "Quelle est la distance de sécurité minimale d'une extinction par rapport à un feu ?",
        answers: [
            { text: "1 mètre", correct: false },
            { text: "2 mètres", correct: true },
            { text: "5 mètres", correct: false },
            { text: "10 mètres", correct: false }
        ],
        explanation: "La distance de sécurité est d'environ 2 à 3 mètres pour éviter les brûlures."
    },
    {
        type: "qcm",
        question: "Quel type d'extincteur utiliser pour un feu électrique ?",
        answers: [
            { text: "Extincteur à eau", correct: false },
            { text: "Extincteur à mousse", correct: false },
            { text: "Extincteur à poudre ou CO2", correct: true },
            { text: "N'importe quel extincteur", correct: false }
        ],
        explanation: "L'eau et la mousse conduisent l'électricité. Seuls la poudre et le CO2 conviennent."
    },
    {
        type: "qcm",
        question: "Que signifie l'acronyme SSI en sécurité incendie ?",
        answers: [
            { text: "Système de Sécurité Intégrée", correct: false },
            { text: "Système de Sécurité Informatique", correct: false },
            { text: "Système de Sécurité Incendie", correct: true },
            { text: "Système Simple d'Intervention", correct: false }
        ],
        explanation: "SSI = Système de Sécurité Incendie. C'est un ensemble de dispositifs pour la détection et l'extinction."
    },
    {
        type: "qcm",
        question: "Combien de temps une issue de secours doit-elle rester dégagée ?",
        answers: [
            { text: "Partiellement dégagée suffit", correct: false },
            { text: "En permanence et totalement dégagée", correct: true },
            { text: "Pendant les heures de travail seulement", correct: false },
            { text: "À la discrétion du gérant", correct: false }
        ],
        explanation: "Les issues de secours doivent être TOUJOURS totalement dégagées pour permettre une évacuation rapide."
    },

    // Vrai/Faux
    {
        type: "vrai-faux",
        question: "On peut utiliser l'ascenseur pour évacuer en cas d'incendie.",
        correct: false,
        explanation: "FAUX. En cas d'incendie, il ne faut JAMAIS utiliser l'ascenseur. Il faut toujours emprunter les escaliers."
    },
    {
        type: "vrai-faux",
        question: "Les détecteurs de fumée doivent être testés régulièrement.",
        correct: true,
        explanation: "VRAI. Les détecteurs doivent être testés au moins une fois par mois pour assurer leur bon fonctionnement."
    },
    {
        type: "vrai-faux",
        question: "Un extincteur peut rester inutilisé sans maintenance pendant 10 ans.",
        correct: false,
        explanation: "FAUX. Les extincteurs doivent faire l'objet d'une maintenance régulière (contrôle tous les 1-2 ans)."
    },
    {
        type: "vrai-faux",
        question: "La fumée tue plus que les flammes en cas d'incendie.",
        correct: true,
        explanation: "VRAI. La fumée provoque l'asphyxie et l'intoxication. Elle est la principale cause de décès."
    },
    {
        type: "vrai-faux",
        question: "On doit partager les consignes de sécurité avec tous les occupants du bâtiment.",
        correct: true,
        explanation: "VRAI. Tous les occupants doivent connaître les consignes d'évacuation et les points de rassemblement."
    },

    // Questions ouvertes (réponses libres)
    {
        type: "open",
        question: "Décrivez les étapes principales pour utiliser un extincteur.",
        keywords: ["goupille", "actionner", "appuyer", "levier"],
        correctAnswers: [
            "Tirer la goupille",
            "Actionner la poignée",
            "Appuyer sur le levier",
            "Viser la base du feu"
        ],
        explanation: "Les étapes sont : Tirer la goupille de sécurité, Actionner la poignée, Appuyer sur le levier, Viser la base du feu."
    },
    {
        type: "open",
        question: "Que faire en cas de panique lors d'une évacuation ?",
        keywords: ["calme", "ordre", "rangée", "organisation", "aide"],
        correctAnswers: [
            "Rester calme",
            "Aider les autres",
            "Maintenir l'ordre",
            "Évacuer en rangée organisée"
        ],
        explanation: "Il faut rester calme, maintenir l'ordre, aider les autres et évacuer de manière organisée."
    },
    {
        type: "open",
        question: "Quels sont les 4 éléments du triangle du feu ?",
        keywords: ["combustible", "oxygène", "chaleur", "réaction", "feu"],
        correctAnswers: [
            "Combustible",
            "Oxygène",
            "Chaleur",
            "Réaction en chaîne"
        ],
        explanation: "Le feu nécessite : un combustible, l'oxygène de l'air, une source de chaleur, et une réaction en chaîne."
    },
    {
        type: "open",
        question: "Listez 3 risques de sécurité importants sur un lieu de travail.",
        keywords: ["risque", "danger", "accident", "incident"],
        correctAnswers: [
            "Incendie",
            "Électricité",
            "Chute",
            "Explosion",
            "Toxicité"
        ],
        explanation: "Chaque environnement a ses propres risques. Identifiez-les pour mieux les prévenir."
    },
    {
        type: "open",
        question: "Pourquoi le port de l'équipement de protection individuelle est-il important ?",
        keywords: ["protection", "sécurité", "blessure", "accident", "prévention"],
        correctAnswers: [
            "Prévenir les blessures",
            "Réduire les accidents",
            "Protection",
            "Sûreté personnelle"
        ],
        explanation: "L'équipement de protection réduit considérablement les blessures et les accidents graves."
    },

    // Plus de QCM
    {
        type: "qcm",
        question: "Quel est le rôle principal d'un équipier de première intervention (EPI) ?",
        answers: [
            { text: "Éteindre tous les feux", correct: false },
            { text: "Alerter et guider l'évacuation", correct: true },
            { text: "Attendre les pompiers sans rien faire", correct: false },
            { text: "Combattre le feu sans équipement", correct: false }
        ],
        explanation: "L'EPI doit alerter les personnes et les guider vers les sorties de secours. La sécurité prime."
    },
    {
        type: "qcm",
        question: "À quelle température l'extincteur à poudre est-il efficace ?",
        answers: [
            { text: "Entre 5°C et 60°C", correct: true },
            { text: "Entre -20°C et 50°C", correct: false },
            { text: "Uniquement à 20°C", correct: false },
            { text: "À toutes les températures", correct: false }
        ],
        explanation: "Les extincteurs à poudre fonctionnent optimalement entre 5°C et 60°C."
    },
    {
        type: "qcm",
        question: "Que signifie le code couleur rouge sur un extincteur ?",
        answers: [
            { text: "Danger immédiat", correct: false },
            { text: "Feu de classe A (bois, papier)", correct: true },
            { text: "À utiliser en dernier recours", correct: false },
            { text: "Extinction chimique", correct: false }
        ],
        explanation: "Le rouge indique un extincteur pour feu de classe A (matériaux solides inflammables)."
    },
    {
        type: "qcm",
        question: "Combien de personnes minimum doivent constituer une équipe de sécurité ?",
        answers: [
            { text: "1 personne", correct: false },
            { text: "2 personnes", correct: false },
            { text: "Au moins 3-5 personnes selon la taille du bâtiment", correct: true },
            { text: "10 personnes minimum", correct: false }
        ],
        explanation: "L'effectif dépend de la taille du bâtiment. Généralement 1 animateur + 2-4 équipiers minimum."
    },
    {
        type: "qcm",
        question: "Quel est le délai d'intervention des pompiers en zone urbaine ?",
        answers: [
            { text: "5-10 minutes", correct: true },
            { text: "Moins d'une minute", correct: false },
            { text: "Plus d'une heure", correct: false },
            { text: "Instantané", correct: false }
        ],
        explanation: "En zone urbaine, le délai moyen est de 5-10 minutes. D'où l'importance de la prévention."
    }
];

// ===== VARIABLES GLOBALES =====
let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let timerInterval;
let timeLeft = 30;

// ===== FONCTIONS PRINCIPALES =====
function startQuiz() {
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    document.getElementById('welcome-section').classList.remove('active');
    document.getElementById('quiz-section').classList.add('active');
    document.getElementById('total-questions').textContent = quizData.length;
    document.getElementById('max-score').textContent = quizData.length;
    loadQuestion();
}

function loadQuestion() {
    const question = quizData[currentQuestion];
    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';
    
    // Mise à jour du numéro de question
    document.getElementById('current-question').textContent = currentQuestion + 1;
    
    // Mise à jour de la barre de progression
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    document.getElementById('progress-bar').style.width = progress + '%';
    
    // Affichage de la question
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('question-type').textContent = `Type: ${question.type === 'qcm' ? 'QCM' : question.type === 'vrai-faux' ? 'Vrai/Faux' : 'Question Ouverte'}`;
    
    // Réinitialiser le timer
    clearInterval(timerInterval);
    timeLeft = 30;
    startTimer();
    
    // Afficher les réponses selon le type
    if (question.type === 'qcm') {
        displayQCM(question, answersContainer);
    } else if (question.type === 'vrai-faux') {
        displayVraiFaux(question, answersContainer);
    } else if (question.type === 'open') {
        displayOpen(question, answersContainer);
    }
    
    // Gestion des boutons
    updateNavigationButtons();
}

function displayQCM(question, container) {
    question.answers.forEach((answer, index) => {
        const div = document.createElement('div');
        div.className = 'answer-option';
        div.innerHTML = `
            <input type="radio" id="answer-${index}" name="answer" value="${index}">
            <label for="answer-${index}" class="answer-text">${answer.text}</label>
        `;
        div.onclick = () => {
            document.querySelectorAll('.answer-option').forEach(opt => opt.classList.remove('selected'));
            div.classList.add('selected');
            userAnswers[currentQuestion] = { type: 'qcm', answer: index };
        };
        container.appendChild(div);
        
        // Restaurer la sélection si elle existe
        if (userAnswers[currentQuestion] && userAnswers[currentQuestion].answer === index) {
            div.classList.add('selected');
            document.getElementById(`answer-${index}`).checked = true;
        }
    });
}

function displayVraiFaux(question, container) {
    const answers = [
        { text: 'VRAI', correct: question.correct },
        { text: 'FAUX', correct: !question.correct }
    ];
    
    answers.forEach((answer, index) => {
        const div = document.createElement('div');
        div.className = 'answer-option';
        div.innerHTML = `
            <input type="radio" id="answer-${index}" name="answer" value="${index}">
            <label for="answer-${index}" class="answer-text">${answer.text}</label>
        `;
        div.onclick = () => {
            document.querySelectorAll('.answer-option').forEach(opt => opt.classList.remove('selected'));
            div.classList.add('selected');
            userAnswers[currentQuestion] = { type: 'vrai-faux', answer: answer.correct };
        };
        container.appendChild(div);
        
        // Restaurer la sélection
        if (userAnswers[currentQuestion] && userAnswers[currentQuestion].answer === answer.correct) {
            div.classList.add('selected');
            document.getElementById(`answer-${index}`).checked = true;
        }
    });
}

function displayOpen(question, container) {
    const div = document.createElement('div');
    div.innerHTML = `
        <textarea id="open-answer" class="answer-input" placeholder="Écrivez votre réponse..." rows="6"></textarea>
    `;
    container.appendChild(div);
    
    // Restaurer la réponse si elle existe
    if (userAnswers[currentQuestion]) {
        document.getElementById('open-answer').value = userAnswers[currentQuestion].answer || '';
    }
    
    document.getElementById('open-answer').addEventListener('input', (e) => {
        userAnswers[currentQuestion] = { type: 'open', answer: e.target.value };
    });
}

function startTimer() {
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            nextQuestion();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerElement = document.getElementById('timer');
    timerElement.textContent = timeLeft;
    
    if (timeLeft <= 10) {
        timerElement.classList.add('warning');
    } else {
        timerElement.classList.remove('warning');
    }
    
    if (timeLeft <= 5) {
        timerElement.classList.add('danger');
    } else {
        timerElement.classList.remove('danger');
    }
}

function nextQuestion() {
    clearInterval(timerInterval);
    
    // Vérifier et calculer le score
    const question = quizData[currentQuestion];
    if (userAnswers[currentQuestion]) {
        const userAnswer = userAnswers[currentQuestion];
        let isCorrect = false;
        
        if (question.type === 'qcm') {
            isCorrect = question.answers[userAnswer.answer].correct;
        } else if (question.type === 'vrai-faux') {
            isCorrect = userAnswer.answer === question.correct;
        } else if (question.type === 'open') {
            // Pour les questions ouvertes, vérifier si les mots-clés sont présents
            const answer = userAnswer.answer.toLowerCase();
            isCorrect = question.correctAnswers.some(keyword => answer.includes(keyword.toLowerCase()));
        }
        
        if (isCorrect) {
            score++;
        }
        
        document.getElementById('current-score').textContent = score;
    }
    
    currentQuestion++;
    
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function previousQuestion() {
    clearInterval(timerInterval);
    currentQuestion--;
    
    if (currentQuestion >= 0) {
        loadQuestion();
    }
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    if (currentQuestion > 0) {
        prevBtn.style.display = 'inline-block';
    } else {
        prevBtn.style.display = 'none';
    }
    
    if (currentQuestion === quizData.length - 1) {
        nextBtn.textContent = 'Terminer le Quiz';
    } else {
        nextBtn.textContent = 'Suivant →';
    }
}

function showResults() {
    document.getElementById('quiz-section').classList.remove('active');
    document.getElementById('results-section').classList.add('active');
    
    const percentage = Math.round((score / quizData.length) * 100);
    const correctCount = score;
    const wrongCount = quizData.length - score;
    
    // Afficher le score final
    document.getElementById('final-score-display').textContent = `${score}/${quizData.length}`;
    document.getElementById('correct-count').textContent = correctCount;
    document.getElementById('wrong-count').textContent = wrongCount;
    document.getElementById('percentage').textContent = percentage + '%';
    
    // Feedback personnalisé
    let feedback = '';
    let feedbackClass = '';
    
    if (percentage >= 90) {
        feedback = '🎉 Excellent ! Vous maîtrisez très bien la sécurité incendie !';
        feedbackClass = 'feedback-excellent';
    } else if (percentage >= 75) {
        feedback = '👍 Très bien ! Vos connaissances sont solides.';
        feedbackClass = 'feedback-good';
    } else if (percentage >= 60) {
        feedback = '📚 Moyen. Vous devriez revoir certains points.';
        feedbackClass = 'feedback-average';
    } else {
        feedback = '⚠️ À revoir. Consultez les ressources de sécurité.';
        feedbackClass = 'feedback-poor';
    }
    
    const feedbackElement = document.getElementById('results-feedback');
    feedbackElement.textContent = feedback;
    feedbackElement.className = feedbackClass;
    
    // Générer la revue des réponses
    generateReview();
}

function generateReview() {
    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = '';
    
    quizData.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        let isCorrect = false;
        let userAnswerText = '';
        let correctAnswerText = '';
        
        if (question.type === 'qcm') {
            if (userAnswer) {
                const selectedAnswer = question.answers[userAnswer.answer];
                userAnswerText = selectedAnswer.text;
                isCorrect = selectedAnswer.correct;
            }
            correctAnswerText = question.answers.find(a => a.correct).text;
        } else if (question.type === 'vrai-faux') {
            userAnswerText = userAnswer ? (userAnswer.answer ? 'VRAI' : 'FAUX') : 'Non répondu';
            isCorrect = userAnswer ? userAnswer.answer === question.correct : false;
            correctAnswerText = question.correct ? 'VRAI' : 'FAUX';
        } else if (question.type === 'open') {
            userAnswerText = userAnswer?.answer || 'Non répondu';
            correctAnswerText = question.correctAnswers.join(', ');
            if (userAnswer?.answer) {
                isCorrect = question.correctAnswers.some(keyword => 
                    userAnswer.answer.toLowerCase().includes(keyword.toLowerCase())
                );
            }
        }
        
        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;
        reviewItem.innerHTML = `
            <div class="review-question">Q${index + 1}: ${question.question}</div>
            <div class="review-answer"><strong>Votre réponse:</strong> ${userAnswerText}</div>
            ${!isCorrect ? `<div class="review-answer"><strong>Bonne réponse:</strong> ${correctAnswerText}</div>` : ''}
            <div class="review-status ${isCorrect ? 'correct' : 'incorrect'}">
                ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
            </div>
            <div class="review-explanation"><strong>Explication:</strong> ${question.explanation}</div>
        `;
        reviewList.appendChild(reviewItem);
    });
}

function restartQuiz() {
    document.getElementById('results-section').classList.remove('active');
    document.getElementById('welcome-section').classList.add('active');
    userAnswers = [];
}

function downloadResults() {
    const percentage = Math.round((score / quizData.length) * 100);
    let content = `RÉSULTATS DU QUIZ SÉCURITÉ INCENDIE & SÛRETÉ\n`;
    content += `====================================\n\n`;
    content += `Date: ${new Date().toLocaleDateString('fr-FR')}\n`;
    content += `Heure: ${new Date().toLocaleTimeString('fr-FR')}\n\n`;
    content += `SCORE: ${score}/${quizData.length}\n`;
    content += `Pourcentage: ${percentage}%\n`;
    content += `Bonnes réponses: ${score}\n`;
    content += `Mauvaises réponses: ${quizData.length - score}\n\n`;
    content += `DÉTAIL DES RÉPONSES\n`;
    content += `==================\n\n`;
    
    quizData.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        let isCorrect = false;
        let userAnswerText = '';
        
        if (question.type === 'qcm') {
            if (userAnswer) {
                userAnswerText = question.answers[userAnswer.answer].text;
                isCorrect = question.answers[userAnswer.answer].correct;
            }
        } else if (question.type === 'vrai-faux') {
            userAnswerText = userAnswer ? (userAnswer.answer ? 'VRAI' : 'FAUX') : 'Non répondu';
            isCorrect = userAnswer ? userAnswer.answer === question.correct : false;
        } else if (question.type === 'open') {
            userAnswerText = userAnswer?.answer || 'Non répondu';
            isCorrect = question.correctAnswers.some(keyword => 
                userAnswer?.answer.toLowerCase().includes(keyword.toLowerCase())
            );
        }
        
        content += `Q${index + 1}: ${question.question}\n`;
        content += `Votre réponse: ${userAnswerText}\n`;
        content += `Résultat: ${isCorrect ? 'CORRECT ✓' : 'INCORRECT ✗'}\n`;
        content += `Explication: ${question.explanation}\n`;
        content += `---\n\n`;
    });
    
    // Télécharger le fichier
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', `resultats-quiz-securite-${new Date().getTime()}.txt`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

// Initialiser le quiz au chargement
window.addEventListener('load', () => {
    console.log('Quiz Sécurité Incendie & Sûreté - Chargé avec succès ✓');
});