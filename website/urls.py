from django.conf.urls import include, url
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    url(r'^$', views.index, name='home'),
    url(r'^our-practice/about-us.html',TemplateView.as_view(template_name="pages/our-practice/about-us.html")),
    url(r'^our-practice/meet-our-doctors.html',TemplateView.as_view(template_name="pages/our-practice/meet-our-doctors.html")),
    url(r'^our-practice/maps-parking.html',TemplateView.as_view(template_name="pages/our-practice/maps-parking.html")),
    url(r'^our-practice/patient-testimonials.html',TemplateView.as_view(template_name="pages/our-practice/patient-testimonials.html")),
    url(r'^invisalign.html',TemplateView.as_view(template_name="pages/invisalign.html")),
    url(r'^our-services.html',TemplateView.as_view(template_name="pages/our-services.html")),
    url(r'^one-day-crowns.html',TemplateView.as_view(template_name="pages/one-day-crowns.html")),
    url(r'^contact.html',TemplateView.as_view(template_name="pages/contact.html")),
    url(r'^sendmessage/', views.sendmessage, name='home'),
]
