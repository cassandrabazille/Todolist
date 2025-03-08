        // Déclaration de la fonction addToList pour ajouter des tâches à la liste
        function addToList() {
            // Récupère la valeur du champ de texte avec l'ID "task"
            let task = document.getElementById("task").value;
            // Récupère l'élément avec l'ID "display2"
            let taskList = document.getElementById("display2");

            // Vérifie si le champ de texte n'est pas vide
            if (task.trim() !== "") {
                // Ajoute la tâche à la liste avec une case à cocher
                taskList.innerHTML += `<div class="task"><input type="checkbox"> ${task}</div>`;
                // Efface le champ de texte après l'ajout de la tâche
                document.getElementById("task").value = "";
            }
        }

        // Fonction pour supprimer les tâches complétées
        function deleteCompletedTasks() {
            // Récupère tous les éléments de la liste
            let tasks = document.querySelectorAll("#display2 .task");

            // Parcourt les éléments de la liste et supprime ceux qui sont cochés
            tasks.forEach(task => {
                if (task.querySelector("input[type='checkbox']").checked) {
                    task.remove();
                }
            });
        }