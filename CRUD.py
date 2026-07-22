usuarios = []

def mostrar_menu():
    print(f'1. Agregar usuario')
    print(f'2. Mostrar usuarios')
    print(f'3. Actualizar usuario')
    print(f'4. Borrar usuario')
    print(f'5. Salir')

def agregar_usuario(usuarios):
    nombre = input('Ingrese nombre del usuario: ')
    usuarios.append(nombre)
    print(f'Usuario agregado exitosamente!.')

def mostrar_usuario(usuarios):
    if not usuarios:
        print(f'No hay usuarios registrados.')
    else:
        print(usuarios)

def actualizar_usuario(usuarios):
    nombre_a_actualizar = input('Ingrese el nombre de usuario a actualizar: ')

    if nombre_a_actualizar in usuarios:
        nuevo_nombre = input(f'Ingrese el nuevo nombre: ')

        if nuevo_nombre:
            usuarios[usuarios.index(nombre_a_actualizar)] = nuevo_nombre

        print(f'Usuario "{nombre_a_actualizar}" actualizado correctamente.')

    else:
        print(f'No se encontró el usuario "{nombre_a_actualizar}".')

def borrar_usuario(usuarios):
    nombre_a_borrar = input('Ingrese el nombre a eliminar: ')

    if nombre_a_borrar in usuarios:
        usuarios.remove(nombre_a_borrar)

        print(f'Usuario "{nombre_a_borrar}" eliminado correctamente.')
    else:
        print(f'No se encontró el usuario "{nombre_a_borrar}".')

def principal():
    while True:
        mostrar_menu()
        opcion = input('Seleccione una opcion del 1 al 5: ')

        if opcion == '1':
            agregar_usuario(usuarios)
        elif opcion == '2':
            mostrar_usuario(usuarios)
        elif opcion == '3':
            actualizar_usuario(usuarios)
        elif opcion == '4':
            borrar_usuario(usuarios)
        elif opcion == '5':
            print('Saliendo del programa. Hasta luego!')
            break

        else:
            print('Opcion no válida. Intente de nuevo')

principal()

