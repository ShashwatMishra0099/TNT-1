https://youtu.be/eyg4Z90XGvE?si=9AuIxM-M5DVKYWIW

https://ksk767509-wq.github.io/tournamentv2/


You are an expert full-stack developer. Your task is to generate a fully

working mobile-first Tournament Web App called **"Adept Play"**, using ONLY the

following technologies:

✅ HTML

✅ Tailwind CSS

✅ JavaScript (for basic UI/UX only, NO AJAX)

✅ PHP

✅ MySQL DB

✅ Font Awesome (only for icons)

NO external frameworks like React, Vue, Laravel, Bootstrap, jQuery, or AJAX

should be used. All actions should be handled through traditional PHP form

submissions and page reloads.

The design should resemble a real mobile application — user-friendly,

responsive, and clean UI. All text selection, right-click, and zoom in/out must

be disabled using JavaScript.

---

## ✅ APP STRUCTURE OVERVIEW:

📁 Root Folder

┣ 📁 common

┃ ┣ header.php

┃ ┣ bottom.php

┃ ┗ config.php

┣ 📁 admin

┃ ┣ login.php

┃ ┣ index.php

┃ ┣ tournament.php

┃ ┣ manage_tournament.php

┃ ┣ user.php

┃ ┣ setting.php

┃ ┗ 📁 common

┃ ┣ header.php

┃ ┗ bottom.php

┣ login.php

┣ index.php

┣ my_tournaments.php

┣ wallet.php

┣ profile.php

┣ install.php

┗ .htaccess (optional)

---

## ✅ COMMON INCLUSIONS (User & Admin Panel)

* `config.php` – one centralized DB connection (host: 127.0.0.1, user: root,

pass: root)

* `header.php` – contains the top navigation, logo, and user\"s wallet

balance.

* `bottom.php` – fixed bottom navigation with icons (Home, My Tournaments,

Wallet, Profile).

All UI components must use Tailwind classes only, and Font Awesome for icons.

Use a modern dark theme.

## ‍ USER PANEL – Pages Design & Functionality

### 1. login.php

* Design: Two tabs – Login and Sign Up in the same file.

* Fields: Username, Password | Username, Email, Password (for signup).

* Use standard PHP form submission. Show errors/success messages on the same

page after reload.

* On success, redirect to `index.php`.

---

### 2. index.php (Homepage)

* Display a list of all \"Upcoming\" tournaments in a card grid format.

* Card: Tournament Title, Game Name, Match Time, Entry Fee, Prize Pool.

* Each card must have a \"Join Now\" button inside a `<form>` tag.

* Clicking \"Join Now\" should submit the form to the same page

(`index.php`). The PHP logic at the top of the file will handle the joining

process: check balance, deduct fee, and add user to participants. Show a

success/error message after the page reloads.

---

### 3. my_tournaments.php

* Use a two-tab layout:

* **\"Upcoming/Live\" tab:** Shows tournaments the user has joined that

are not yet completed. If a tournament is live, it should display the **Room

ID** and **Password**.

* **\"Completed\" tab:** Shows a history of all tournaments the user has

played, along with their results (e.g., \"Winner\", \"Participated\").

---

### 4. wallet.php

* Display current wallet balance in a large, prominent card.

* Show a transaction history list.

* Include \"Add Money\" and \"Withdraw\" buttons (dummy buttons).

---

### 5. profile.php

* Show and Edit: Username, Email.

* Change password section.

* Logout button.

---

## ⚙️ ADMIN PANEL – Pages Design & Functions

### 1. login.php

* Simple, secure login page for the admin using a standard PHP form.

* Fields: Username & Password.

---

### 2. index.php (Admin Dashboard)

* Mobile-app style Admin Dashboard with clean, modern UI.

* Show quick stats using small Tailwind grid cards:

* Total Users, Total Tournaments, Total Prize Distributed, Total Revenue

(Commission).

* Include a quick-action button: \"Create New Tournament\".

---

### 3. tournament.php

* A standard PHP form to add a new tournament.

* Fields: Title, Game Name, Entry Fee, Prize Pool, Match Time, Commission

Percentage (e.g., 20%).

* On submission, the page reloads and shows a success/error message.

* Below the form, show a list of all created tournaments with options to

Edit/Delete (leading to other pages or handled with GET/POST requests).

---

### 4. manage_tournament.php

* This is the core management page for a single tournament.

* Display a list of all users who have joined.

* A form to enter/update the **Room ID** and **Room Password**.

* A form with a dropdown menu of all participants to select the winner.

* A button \"Declare Winner & Distribute Prize\". When the form is submitted,

the PHP logic will:

1. Add the `prize_pool` amount to the winner\"s wallet.

2. Change the tournament `status` to \\\\\\\'Completed\\\\\\\

3. Show a success message after the page reloads.

---

### 5. user.php

* List all registered users with their current wallet balance.

* Option to view a user\"s match history or block the user.

---

### 6. setting.php

* Update admin info/password using a standard PHP form.

---

## ️ FEATURES TO IMPLEMENT:

* All actions are handled by traditional PHP form submissions (POST/GET).

* `install.php` must:

* Create the database and all required tables.

* Insert default admin credentials (admin/admin123).

* Redirect to `login.php` after successful installation.

---

## 📦 DATABASE SCHEMA (Install File Should Auto-Create)

* `users` (id, username, email, password, wallet_balance, created_at)

* `admin` (id, username, password)

* `tournaments` (id, title, game_name, entry_fee, prize_pool, match_time,

room_id, room_password, status, created_at)

* `participants` (id, user_id, tournament_id)

* `transactions` (id, user_id, amount, type, description, created_at) *

(type: \\\\\\\'credit\\\\\\\' or \\\\\\\'debit\\\\\\\

---

## 🔐 SECURITY & USER EXPERIENCE

* Disable right-click, text selection, and zoom using JS.

* Use `overflow-hidden`, `select-none`, and custom JS for a native app feel.

* Validate all forms on the server-side (PHP).

* Use PHP sessions for login tracking.

* Use prepared statements in PHP to prevent SQL injection.

* Clean redirects on login/logout.

* Consistent dark theme, color scheme, and typography across the app.

---

(All pricing/wallet values should be displayed in Indian Rupees (₹) format.

Your output should be a complete ready-to-run project, structured into pages

and folders.)

## 🎁 FINAL DELIVERABLE:

* Generate all required code files and folders as described above. For each

file, clearly mention:

* The filename

* The folder/directory where it should be saved

* The complete source code/content of the file

* All PHP files with integrated logic.

* The complete SQL schema inside `install.php`.

* The project should be a single folder, ready to be uploaded and run on a

localhost or hosting server.
