from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.utils.translation import gettext as _
from django.http import JsonResponse

@login_required
def dashboard(request):
    """
    Render the dashboard page for authenticated users.
    """
    return render(request, 'dash/home.html')