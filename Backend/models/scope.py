# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from models.base_model_ import Model
import util


class Scope(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    def __init__(self, id: int = None, name: str = None, subscope: List[object] = None):  # noqa: E501
        """Scope - a model defined in Swagger

        :param id: The id of this Scope.  # noqa: E501
        :type id: int
        :param name: The name of this Scope.  # noqa: E501
        :type name: str
        :param subscope: The subscope of this Scope.  # noqa: E501
        :type subscope: List[Scope]
        """
        self.swagger_types = {
            'id': int,
            'name': str,
            'subscope': List[object]
        }

        self.attribute_map = {
            'id': 'id',
            'name': 'name',
            'subscope': 'subscope'
        }

        self._id = id
        self._name = name
        self._subscope = subscope

    @classmethod
    def from_dict(cls, dikt) -> 'Scope':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The Scope of this Scope.  # noqa: E501
        :rtype: Scope
        """
        return util.deserialize_model(dikt, cls)

    @property
    def id(self) -> int:
        """Gets the id of this Scope.


        :return: The id of this Scope.
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id: int):
        """Sets the id of this Scope.


        :param id: The id of this Scope.
        :type id: int
        """

        self._id = id

    @property
    def name(self) -> str:
        """Gets the name of this Scope.


        :return: The name of this Scope.
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name: str):
        """Sets the name of this Scope.


        :param name: The name of this Scope.
        :type name: str
        """

        self._name = name

    @property
    def subscope(self) -> List[object]:
        """Gets the subscope of this Scope.

        Subscope reference  # noqa: E501

        :return: The subscope of this Scope.
        :rtype: List[Scope]
        """
        return self._subscope

    @subscope.setter
    def subscope(self, subscope: List[object]):
        """Sets the subscope of this Scope.

        Subscope reference  # noqa: E501

        :param subscope: The subscope of this Scope.
        :type subscope: List[Scope]
        """

        self._subscope = subscope