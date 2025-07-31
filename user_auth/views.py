from django.shortcuts import render, redirect
from django.utils.translation import gettext as _
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse, JsonResponse
from django.urls import reverse, reverse_lazy


def login_view(request):
    if request.user.is_authenticated:
        return redirect('dash:home')
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)

        try:
            if user is not None:
                login(request, user)
                return JsonResponse({'success': True, 'redirect_url': reverse('dash:home')})
            else:
                return JsonResponse({'success': False, 'errors': [_('Identifiants invalides')]})
        except Exception as e:
            return JsonResponse({'success': False, 'errors': [_(f'Une erreur est survenue {e}')]})
    return render(request, 'user_auth/login.html')

@login_required
def logout_view(request):
    """
    Déconnexion de l'utilisateur.
    """
    logout(request)
    return redirect('user_auth:login')