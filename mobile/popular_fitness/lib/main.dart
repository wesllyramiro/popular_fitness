import 'package:flutter/material.dart';
import 'package:popular_fitness/pages/Login.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Popular Fitness',
      theme: ThemeData(primarySwatch: Colors.white),
      home: LoginPage(),
    );
  }
}