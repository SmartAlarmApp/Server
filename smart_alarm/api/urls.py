from django.conf.urls import url

from . import views

urlpatterns = [
	url(r'^$', views.index, name='index'),
	url(r'^register_wakeup_time$', views.register_wakeup_time, name='register_wakeup_time'),
]
