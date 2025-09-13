"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function PropertyLandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Consulta enviada:", formData);
    alert("¡Gracias por tu consulta! Te contactaremos pronto.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-emerald-500 text-white text-sm font-semibold px-4 py-2">
                DISPONIBLE AHORA
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Departamento en Venta
              </h1>
              <h2 className="text-2xl lg:text-3xl font-light text-blue-100">
                Condominio Gran Océano
              </h2>
              <p className="text-lg text-blue-100">
                Recreo, Viña del Mar - Vista Panorámica a la Bahía
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-3xl lg:text-4xl font-bold text-emerald-400">
                  UF 10.600
                </div>
                <div className="text-lg text-blue-200">
                  119 m² + 7.5 m² terraza
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3">
                  Ver Detalles
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3">
                  Agendar Visita
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/57b9996f-c6ef-4156-9917-b59da1f774d8.png"
                alt="Vista panorámica del departamento en Torre E con vista a la bahía de Valparaíso"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute top-4 right-4 bg-blue-900/90 text-white px-3 py-1 rounded text-sm font-semibold">
                Torre E - Piso 9
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Exclusivo Departamento con Vista al Mar
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ubicado en el piso 9 de la Torre E, este departamento ofrece una vista panorámica 
              inigualable de la bahía de Valparaíso en un condominio consolidado de alto estándar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-600">119 m²</CardTitle>
                <CardDescription>Superficie Interior</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-600">7.5 m²</CardTitle>
                <CardDescription>Terraza Cerrada</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-600">3</CardTitle>
                <CardDescription>Dormitorios en Suite</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-600">3</CardTitle>
                <CardDescription>Baños Completos</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4ebf7584-6c97-46a7-aa5a-611d59887743.png"
                alt="Living-comedor moderno con terraza cerrada y vista a la bahía"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Características Principales</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span><strong>3 dormitorios en suite</strong> con baños privados</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span><strong>Living-comedor</strong> con salida a terraza cerrada</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span><strong>Cocina amoblada y equipada</strong> + logia</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span><strong>Ventanas termopanel</strong> en toda la propiedad</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span><strong>1 estacionamiento subterráneo</strong> + bodega</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Condominium Amenities */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Amenidades del Condominio
            </h2>
            <p className="text-lg text-gray-600">
              Disfruta de instalaciones de primer nivel en un ambiente seguro y familiar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/333e2348-4c34-4f5d-a03f-f94ee102d901.png"
                  alt="Piscinas modernas del condominio con área recreativa"
                  className="rounded-t-lg w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl mb-2">Piscinas</CardTitle>
                <CardDescription>
                  Piscinas para adultos y niños con áreas de descanso
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/91d7daaa-872e-4739-974d-e1683d953eb9.png"
                  alt="Quincho moderno con parrillas y área social"
                  className="rounded-t-lg w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl mb-2">Quincho</CardTitle>
                <CardDescription>
                  Área de parrillas y eventos sociales
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b7665bce-8f60-485a-bbe6-7f5eee8a3f7c.png"
                  alt="Gimnasio completamente equipado con máquinas modernas"
                  className="rounded-t-lg w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl mb-2">Gimnasio</CardTitle>
                <CardDescription>
                  Gimnasio completamente equipado
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5e64f98d-fd9d-46e9-a08f-6f54039eaf4a.png"
                  alt="Multicanchas para diversos deportes y recreación"
                  className="rounded-t-lg w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl mb-2">Multicanchas</CardTitle>
                <CardDescription>
                  Espacios deportivos para toda la familia
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/03ea69ee-efdb-4ace-bbaf-25416a5a68b3.png"
                  alt="Jardines y áreas verdes con diseño paisajístico"
                  className="rounded-t-lg w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl mb-2">Jardines</CardTitle>
                <CardDescription>
                  Amplias áreas verdes y paisajismo
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c4702f41-8988-458e-a4b9-b987410594ac.png"
                  alt="Sistema de acceso controlado y seguridad 24 horas"
                  className="rounded-t-lg w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl mb-2">Seguridad</CardTitle>
                <CardDescription>
                  Acceso controlado y estacionamiento de visitas
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ubicación Privilegiada
            </h2>
            <p className="text-lg text-gray-600">
              Sector Recreo - El barrio tradicional y residencial de Viña del Mar
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Dirección</h3>
                <p className="text-lg text-gray-700 font-semibold">
                  Amunátegui 1946, Torre E – Viña del Mar
                </p>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Conectividad</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-500 font-bold">📍</span>
                    <span><strong>Conexión directa</strong> a Valparaíso y centro de Viña por Av. España</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-500 font-bold">🏛️</span>
                    <span><strong>Cercano a Plaza Recreo</strong> y servicios del barrio</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-500 font-bold">🎓</span>
                    <span><strong>Universidades cercanas</strong> y centros educacionales</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-500 font-bold">🛒</span>
                    <span><strong>Comercio local</strong> y servicios a minutos</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/856d8f82-cfa0-4444-a974-9513b6d8ba81.png"
                alt="Ubicación privilegiada en Recreo, Viña del Mar con Plaza Recreo y conectividad"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              ¿Interesado en esta Propiedad?
            </h2>
            <p className="text-xl text-blue-100">
              Contáctanos para más información o para agendar una visita
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-4">Información de Contacto</h3>
                <div className="space-y-3">
                  <p className="text-lg">
                    <strong>Precio:</strong> <span className="text-emerald-400 font-bold">UF 10.600</span>
                  </p>
                  <p className="text-lg">
                    <strong>Dirección:</strong> Amunátegui 1946, Torre E
                  </p>
                  <p className="text-lg">
                    <strong>Ubicación:</strong> Recreo, Viña del Mar
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold">Características Destacadas:</h4>
                <ul className="space-y-2 text-blue-100">
                  <li>• Vista panorámica a la bahía de Valparaíso</li>
                  <li>• 119 m² + 7.5 m² de terraza</li>
                  <li>• 3 dormitorios en suite + 3 baños</li>
                  <li>• Estacionamiento subterráneo + bodega</li>
                  <li>• Condominio consolidado con amenidades completas</li>
                </ul>
              </div>
            </div>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Solicitar Información</CardTitle>
                <CardDescription className="text-center text-blue-100">
                  Completa el formulario y nos contactaremos contigo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Tu nombre completo"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/70"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Tu email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/70"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Tu teléfono"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/70"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Mensaje o consultas adicionales"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/70"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3"
                  >
                    Enviar Consulta
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-400 text-center">
        <div className="container mx-auto px-4">
          <p>&copy; 2024 Condominio Gran Océano - Departamento en Venta. Todos los derechos reservados.</p>
          <p className="mt-2">Viña del Mar, Región de Valparaíso, Chile</p>
        </div>
      </footer>
    </div>
  );
}