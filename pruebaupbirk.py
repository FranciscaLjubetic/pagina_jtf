
def promlista(arr):
    suma = 0
    prom = 0
    for item in arr:
        print (item)
        suma += float(item['nota'])
        
    prom = suma/len(lista)
    print (f'El promedio del curso es {prom}')
    
    #lo que se quiere es mostrar por li cada item del arreglo
arreglo = [{nombre: "Jaime", nota: 5, clase: "Matemática"},{nombre: "Alejandro", nota: 4.7, clase: "Matemática"},{nombre: "Pedro", nota: 3.5, clase: "Matemática"},{nombre: "Daniela", nota: 2, clase: "Matemática"},{nombre: "Ana", nota: 3, clase: "Matemática"}]
    
promlista(arreglo)   
    
        #print (f'Nombre: {item['nombre']}, nota: {item['nota']}, clase: {item['clase']}')
"""HTML
    <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Nota</th>
                    <th scope="col">Clase</th>
                </tr>
            </thead>
            <tbody>
                {% for alumno in arreglo %}
                <tr>
                    <td>{{alumno.nombre}}</td>
                    <td>{{alumno.nota}}</td>
                    <td>{{alumno.clase}}</td>
                </tr>
                {% endfor %}
            </tbody>
        </table>
"""   
    