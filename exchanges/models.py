# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Exchange(models.Model):
    name = models.CharField(max_length=255, primary_key=True)

    def __unicode__(self):
        return self.name

    def save(self, *args, **kwargs):
        super(Exchange, self).save(*args, **kwargs)

    class Meta: 
        ordering = ["name"]

    def get_absolute_url(self):
        """
        Returns the url to access a particular book instance.
        """
        return reverse('Exchange-Detail', args=[str(self.name)])
