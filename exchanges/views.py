# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
from rest_framework import generics

from .models import Exchange
from .serializers import ExchangeSerializer


class ExchangeList(generics.ListCreateAPIView):
	"""
	API endpoint for listing and creating Book objects
	"""
	queryset = Exchange.objects.all()
	serializer_class = ExchangeSerializer
