## Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/projectname.git
```

### 2. Change into the project directory and create a virtual environment

```bash
cd projectname
python -m venv .venv
```

Activate the virtual environment:

**Linux/macOS:**
```bash
source .venv/bin/activate
```

**Windows (Command Prompt):**
```cmd
.venv\Scripts\activate
```

### 3. Install dependencies

**Linux/macOS:**
```bash
pip install -r requirements.txt
```

**Windows (Command Prompt):**
```cmd
pip install -r requirements.txt
```

### 4. Run migrations

**Linux/macOS:**
```bash
python manage.py makemigrations
python manage.py migrate
```

**Windows (Command Prompt):**
```cmd
python manage.py makemigrations
python manage.py migrate
```

## Usage

### 5. Create a superuser (admin)

**Linux/macOS:**
```bash
python manage.py createsuperuser
```

**Windows (Command Prompt):**
```cmd
python manage.py createsuperuser
```

Follow the prompts to set up the admin username, email, and password.

---

Start the development server:

**Linux/macOS:**
```bash
python manage.py runserver
```

**Windows (Command Prompt):**
```cmd
python manage.py runserver
```
---
In your browser paste the following url:
```bash
http://127.0.0.1:8000/admin/
```