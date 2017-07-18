from django.conf.urls import url

from . import views

urlpatterns = [
	url(r'^$', views.ExchangeList.as_view(), name='exchange-list'),
]