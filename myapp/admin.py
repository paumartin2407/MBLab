from django.contrib import admin
from .models import PubHL, currentLabMember, labCollabs, otherLabMembers, pub

# Register your models here.


#admin.site.register(Question)
#admin.site.register(Choice)
admin.site.register(PubHL)
admin.site.register(pub)
admin.site.register(currentLabMember)
admin.site.register(labCollabs)
admin.site.register(otherLabMembers)