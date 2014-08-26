from django.conf.urls import patterns, include, url


urlpatterns = patterns('',
    url(r'^difference/$', 'servicetest.views.difference'),
    url(r'^difference/form/$', 'servicetest.views.form'),
)
