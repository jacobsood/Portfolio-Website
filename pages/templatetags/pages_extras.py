from django import template

register = template.Library()

db_array = None
array_size = None
array_index = 0

@register.simple_tag
def cycle_db_array(user_list):
    global db_array, array_size, array_index
    db_array = user_list
    array_size = len(db_array)
    array_index = 0
    
@register.simple_tag
def cycle_array():
    global db_array, array_size, array_index
    element = db_array[array_index]
    array_index = 0 if array_index + 1 >= array_size else array_index + 1
    return element.shade

