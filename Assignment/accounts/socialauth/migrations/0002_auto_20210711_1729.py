# Generated by Django 3.2.4 on 2021-07-11 11:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('socialauth', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='contactuser',
            old_name='fist_name',
            new_name='first_name',
        ),
        migrations.RenameField(
            model_name='contactuser',
            old_name='message',
            new_name='massage',
        ),
    ]