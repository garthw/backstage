from django.conf.urls import patterns, url

from servicetest import views

urlpatterns = patterns('',
    url(r'^$', views.difference, name='difference'),
    url(r'^difference/form/?$', views.form, name='form'),
)
