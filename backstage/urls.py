from django.conf.urls import patterns, include, url


urlpatterns = patterns('',
    url(r'^difference/$', include('servicetest.urls', namespace='difference')),
    url(r'^difference/form/$', include('servicetest.urls', namespace='form')),
)
