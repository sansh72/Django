import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'webinar_project.settings')  # Ensure the module path is correct

application = get_wsgi_application()
